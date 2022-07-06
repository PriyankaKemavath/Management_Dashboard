import { useRef, useState } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';

import classes from './UploadExcel.module.css';

const UploadExcel = () => {
    const fileInputRef = useRef();
    const [isFileUploaded, setIsFileUploaded] =  useState(false);
    const [excelData, setExcelData] = useState();

    const fileChangeHandler = () => {
        setIsFileUploaded(true);
        sessionStorage.removeItem("excel-name");
        sessionStorage.removeItem("excel-data");
        setExcelData();
        ExcelRenderer(fileInputRef.current.files[0], (err, res) => {
            if(err){
                console.log("Error: ", err);            
            }
            else{
                setExcelData({ cols: res.cols, rows: res.rows });   
            }
        });
    };

    let fileName = sessionStorage.getItem("excel-name");
    let fileData = JSON.parse(sessionStorage.getItem("excel-data"));
    let tableHead = fileData && (
        fileData.rows[0].map((obj, index) => (
            <th key={index}>{obj}</th>
        ))
    );
    let tableBody = fileData && (
        fileData.rows.slice(1, fileData.rows.length).map((row, rowIndex) => (
            <tr key={rowIndex}>
                {row.map((data, dataIndex) => (
                    <td key={dataIndex}>{data}</td>
                ))}
            </tr>
        ))
    );

    const submitHandler = (event) => {
        event.preventDefault();
        if(excelData === undefined) {
            alert("File: " + fileInputRef.current.files[0].name + " contains no data. Please upload the excel file with data");
            fileInputRef.current.value = '';
            sessionStorage.removeItem("excel-data");
            sessionStorage.removeItem("excel-name");
            setIsFileUploaded(false);
            return;
        } else {
            let fileName = fileInputRef.current.files[0].name;
            alert("File: " + fileName + " has been uploaded successfully!");
            sessionStorage.setItem("excel-data", JSON.stringify(excelData));
            let fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf('.') || fileName)
            sessionStorage.setItem("excel-name", fileNameWithoutExtension); 
            fileInputRef.current.value = '';
            setIsFileUploaded(false);
        }
    };

    return (
        <div className={`container ${classes.mainContainer}`}>
            <h1 className={classes.heading}>ADD RESOURCE DETAILS</h1>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="upload-excel">Upload File: &nbsp;</label>
                    <input type="file" id="upload-excel" ref={fileInputRef} accept='.xls, .xlsx, .csv' onChange={fileChangeHandler} />     
                    <h6 className="text-info">(Accepts only .csv, .xls files)</h6>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <button className="btn btn-primary" type="submit" disabled={!isFileUploaded} onClick={submitHandler}>Upload</button>
                </div>
            </div>
            {fileData && (
                <div className={classes.excelData}>
                    <h3>Uploaded <span className={classes.fileName}>{fileName}</span> excel data</h3><br />
                    <div style={{ width: "80vw", height: "68vh", overflowX: "auto" }}>
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>{tableHead}</tr>
                            </thead>
                            <tbody>{tableBody}</tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadExcel;