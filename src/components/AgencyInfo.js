import React, { useEffect, useState } from "react";
import "../styles/isro.css";
import "../App.css";
import { FaSpinner } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "antd";
import * as api from "../services/agencyDataAPI";

const AgencyInfo = (props) => {
  /// Download Html2Canvas and jsPdf data

  const GenericPdfDownloader = () => {
    html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [612, 792],
      });
      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("agencyInfomation.pdf");
    });
  };
  const currentAgency = props.match.params.info;
  const [agencySpaceCraft, setAgencySpaceCraft] = useState([]);

  // Calling Agency Apis

  useEffect(() => {
    api.agencyDataList().then((data) => {
      try {
        data.Items.map((specificAgency) => {
          let currentAgencyVar = props.match.params.info;
          currentAgencyVar = currentAgencyVar.toLowerCase();
          if (currentAgencyVar === specificAgency.agency) {
            specificAgency.agency = currentAgencyVar;
            return setAgencySpaceCraft(specificAgency);
          } else {
            return null;
          }
        });
      } catch (error) {
        console.log(error);
      }
    });
  }, [currentAgency, props.match.params.info]);

  const agencySatelittes = agencySpaceCraft.satelittes;
  const agencyLaunchVehicles = agencySpaceCraft.spacecrafts;
  const agencyCenters = agencySpaceCraft.centers;

  return (
    <>
      <div style={{ color: "red" }}>
        <div className="space-agencies">
          <h1 className="header-agency">Top satellites from {currentAgency}</h1>

          {agencySpaceCraft.length === 0 ? (
            <FaSpinner icon="spinner" className="spinner" />
          ) : (
            <>
              <Button type="primary" onClick={GenericPdfDownloader}>
                Download {currentAgency} Mission Report
              </Button>
              <div id="invoiceCapture">
                <table className="isro">
                  <tbody id="isro-body">
                    <tr>
                      <th className="isro-tablehead">Agency</th>
                      <th className="isro-tablehead">Mission Id</th>
                      <th className="isro-tablehead">Mission Year</th>
                      <th className="isro-tablehead">Mission Name</th>
                    </tr>
                    {agencySatelittes.map((spacecraft) => {
                      return (
                        <tr key={spacecraft.id} className="isro-table-row">
                          <td>{agencySpaceCraft.agency}</td>
                          <td>{spacecraft.id}</td>
                          <td>{spacecraft.year}</td>
                          <td>{spacecraft.spacecraftName}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {agencyLaunchVehicles && agencyLaunchVehicles.length > 0 && (
                  <>
                    <h2 className="header-agency">
                      Launch vehicles operated by {currentAgency}
                    </h2>
                    <table className="isro">
                      <tbody>
                        <tr>
                          <th className="isro-tablehead">Vehicle Id</th>
                          <th className="isro-tablehead">First Flown</th>
                          <th className="isro-tablehead">Vehicle Name</th>
                        </tr>
                        {agencyLaunchVehicles.map((vehicle) => (
                          <tr key={vehicle.id} className="isro-table-row">
                            <td>{vehicle.id}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.spacecraftName}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                {agencyCenters && agencyCenters.length > 0 && (
                  <>
                    <h2 className="header-agency">
                      Launch centers used by {currentAgency}
                    </h2>
                    <table className="isro">
                      <tbody>
                        <tr>
                          <th className="isro-tablehead">Center Id</th>
                          <th className="isro-tablehead">Space Center</th>
                          <th className="isro-tablehead">Location</th>
                        </tr>
                        {agencyCenters.map((center) => (
                          <tr key={center.id} className="isro-table-row">
                            <td>{center.id}</td>
                            <td>{center.spaceCenter}</td>
                            <td>{center.place}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AgencyInfo;
