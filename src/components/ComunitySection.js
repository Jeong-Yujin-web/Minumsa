import eventNoticeData from '../data/events_comunity';
import './Event_Comunity.css';
import '../styles/common.css';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function ComunitySection() {
  const { type } = useParams();
  const notices = eventNoticeData.filter(
    (notice) => notice.category === type
  );
  return (
    <div className="event_notice_list">
      <div className="title">
        <p>공지사항</p>
      </div>
      <Container>
        <Row>
          {notices.map((notice) => (
            <Col md={3} key={notice.id}>
              <a href={notice.link} target='_blank' rel='noopener noreferrer'>
                <div className='card'>
                  <div className="card_img">
                    <img src={`${process.env.PUBLIC_URL + notice.image}`} alt={notice.title} />
                  </div>
                  <div className="card_text">
                    <p className='text_title'>{notice.title}</p>
                    <span>{notice.publisher}</span>
                    <span> | </span>
                    <span>{notice.date}</span>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}