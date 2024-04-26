import { CHeader, CHeaderDivider, CHeaderText } from "@coreui/react";
import { CHeaderBrand, CSmartTable } from "@coreui/react-pro";
import { CSVLink } from "react-csv";

const Table = ({
  column,
  data,
  scopedColumns = null,
  TableName,
  className = "width-max",
}) => {
  const handleExport = () => {
    // Extract field names from the first object in the data array
    const fields = data.length > 0 ? Object.keys(data[0]) : [];

    // Define headers based on extracted field names
    const headers = fields?.map((field) => ({
      label: field,
      key: field,
    }));

    // Map the data to match the headers
    const csvData = data.map((item) =>
      // Map each item to an object with keys matching the field names
      fields.reduce((acc, field) => {
        acc[field] = item[field];
        return acc;
      }, {})
    );

    return (
      <CSVLink
        data={csvData}
        headers={headers}
        filename={"my-data.csv"}
        className="btn btn-primary" // Add any desired class
        target="_blank"
      >
        Export to CSV
      </CSVLink>
    );
  };

  return (
    <>
      <CHeaderBrand className="mb-3 bg-body-tertiary px-3 py-1 rounded-1 d-flex justify-content-between align-items-center">
        {TableName}
        {handleExport()}
      </CHeaderBrand>
      <CSmartTable
        activePage={1}
        columns={column}
        tableFilter
        items={data}
        itemsPerPage={10}
        pagination
        tableProps={{
          className: `add-this-class  customStayless ${className} mt-3`,
          responsive: true,
          striped: true,
          hover: true,
        }}
        scopedColumns={scopedColumns}
        tableBodyProps={{
          className: "align-middle",
        }}
      />
    </>
  );
};

export default Table;
