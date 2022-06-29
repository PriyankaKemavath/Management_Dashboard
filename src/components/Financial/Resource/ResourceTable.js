import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const ResourceTable = ({ resources }) => {

  const columns = [
    {
      name: "Employee Id",
      selector: row => row.employee_id,
      sortable: true,
      hide: "sm"
    },
    {
      name: "Employee",
      selector: row => row.employee,
      sortable: true
    },
    {
      name: "Employee L4 Org Unit",
      selector: row => row.employee_L4_org_unit,
      sortable: true,
      hide: "md"
    },
    {
      name: "Employee Sub Group",
      selector: row => row.employee_subgroup,
      sortable: true,
      hide: "md"
    },
    {
      name: "Customer ID",
      selector: row => row.customer_id,
      sortable: true,
      hide: "md"
    },
    {
      name: "Customer",
      selector: row => row.customer,
      sortable: true,
      hide: "md"
    },
    {
      name: "Project L1 Org Unit ID",
      selector: row => row.project_L1_org_unit_id,
      sortable: true,
      hide: "md"
    },
    {
      name: "Project L1 Org Unit",
      selector: row => row.project_L1_org_unit,
      sortable: true,
      hide: "md"
    },
    {
      name: "Project L2 Org Unit ID",
      selector: row => row.project_L2_org_unit_id,
      sortable: true,
      hide: "md"
    },
    {
      name: "Project L2 Org Unit",
      selector: row => row.project_L2_org_unit,
      sortable: true,
      hide: "md"
    },
    {
      name: "Project L3 Org Unit ID",
      selector: row => row.project_L3_org_unit_id,
      sortable: true,
      hide: "md"
    },
    {
      name: "Project L3 Org Unit",
      selector: row => row.project_L3_org_unit,
      sortable: true,
      hide: "md"
    },
    {
      name: "Project L4 Org Unit ID",
      selector: row => row.project_L4_org_unit_id,
      sortable: true,
      hide: "md"
    },
    {
      name: "Project L4 Org Unit",
      selector: row => row.project_L4_org_unit,
      sortable: true,
      hide: "md"
    },
    {
      name: "Component",
      selector: row => row.component,
      sortable: true,
      hide: "md"
    },
    {
      name: "Project",
      selector: row => row.project,
      sortable: true,
      hide: "md"
    },
    {
      name: "Total Cost",
      selector: row => row.total_cost,
      sortable: true,
      hide: "md"
    },
    {
      name: "Adj PM",
      selector: row => row.adj_PM,
      sortable: true,
      hide: "md"
    },
    {
      name: "GM",
      selector: row => row.GM,
      sortable: true,
      hide: "md"
    },
    {
      name: "Month",
      selector: row => row.month,
      sortable: true,
      hide: "md"
    },
    {
      name: "Quarter",
      selector: row => row.quarter,
      sortable: true,
      hide: "md"
    },
    {
      name: "FY",
      selector: row => row.FY,
      sortable: true,
      hide: "md"
    },
    {
      name: "Mode",
      selector: row => row.mode,
      sortable: true,
      hide: "md"
    },
    {
      name: "L2",
      selector: row => row.L2,
      sortable: true,
      hide: "md"
    },
    {
      name: "L3",
      selector: row => row.L3,
      sortable: true,
      hide: "md"
    },
    {
      name: "L4",
      selector: row => row.L4,
      sortable: true,
      hide: "md"
    },
    {
      name: "Employee Group",
      selector: row => row.employee_group,
      sortable: true,
      hide: "md"
    },
    {
      name: "Employee Sub Group",
      selector: row => row.employee_subgrp,
      sortable: true,
      hide: "md"
    }
  ];

  const [filterText, setFilterText] = React.useState("");
  
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );

  const filteredItems = resources.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      defaultSortField="employee-id"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default ResourceTable;
