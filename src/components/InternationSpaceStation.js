import React, { useState, useEffect } from 'react';
import '../App.css';
import '../styles/internationalSpaceStation.css';
import { Card, Button, Modal, Collapse } from 'antd';
import logoIss from '../assets/iss.png';
import { issDataList } from '../services/internationSpaceAPI';
import { text, sizaMass} from '../constants/internationSpaceStations';

const { Panel } = Collapse;

const InternationaSpaceStation = () => {

  const [currentPosition, setCurrentPosition] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    issDataList().then((data) => {
      setCurrentPosition(data.iss_position);
    });
  }, [currentPosition])

  const issLatitude = currentPosition.latitude;
  const issLongitude = currentPosition.longitude;

  if (!currentPosition) {
    return null;
  }


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='international-space-station'>
      <Card className="international-space-station">
        <h1>International Space Station</h1>
        <p>{text.issInfo}</p>
        <p style={{ marginTop: 20, fontWeight: 'bold' }}>Current postion of International Space Station -- Latitude <span style={{ color: 'green', fontSize: 30 }}>{issLatitude}</span>,Longitude <span style={{ color: 'green', fontSize: 30 }}>{issLongitude}</span></p></Card>
      <Collapse style={{ marginTop: 30, borderRadius: 20 }}>
        <Panel header="More info?" key="1" style={{ borderRadius: 20 }}>
          <p style={{ fontStyle: 'italic', fontSize: 20 }}>{text.moreInfo}.</p>

          <div className="modal">
            <Button type="primary" onClick={showModal}>
              Fun Facts
            </Button>
            <Modal title="International Space Station" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              {
                sizaMass.map(sizemass => {
                  return (
                    <ul key={sizemass.id}><li>{sizemass.statement}</li></ul>
                  )
                })
              }
            </Modal>
          </div>
        </Panel>
      </Collapse>
      <Card className="iss-image">
        <img src={logoIss} alt="LogoIss" />
      </Card>
    </div>
  )
}

export default InternationaSpaceStation;