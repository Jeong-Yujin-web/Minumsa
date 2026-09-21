import eventNoticeData from '../data/events_comunity';
import './Event_Comunity.css';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function EventSection() {
  const {type}=useParams();
  const events=eventNoticeData.filter((event)=> event.category === type);
  const today = new Date();
  const getEventStatus  = (event)=>{
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    if(today < start){
      return 'upcoming';
    }if(start <= today && today < end){
      return 'ongoing';
    }else{
      return 'ended';
    }
  }
  const isOngoing = (event)=>{
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    return today >= start && today <= end;
  }
  return (
    <div className="event_notice_list">
      <div className="title">
        <p>이벤트</p>
      </div>
      <Container>
        <Row>
          {events.map((event) => (
            <Col md={3}  key={event.id}>
              <a href={event.link} target='_blank' rel='noopener noreferrer' >
                <div className='card'>
                  <div className="card_img">
                    <img src={`${process.env.PUBLIC_URL + event.image}`} alt={event.title} />
                    <div className="event_come">
                      {getEventStatus(event) === 'upcoming' && (
                        <span className="event_badge upcoming">
                          진행 예정
                        </span>
                      )}
                    </div>
                    <div className="event_ing">
                      {getEventStatus(event) === 'ongoing' && (
                        <span className="event_badge ongoing">
                          진행중
                        </span>
                      )}
                    </div>
                    <div className="event_end">
                      {getEventStatus(event) === 'ended' && (
                        <span className="event_badge ended">
                          종료
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="card_text">
                    <p>{event.title}</p>
                    <span>이벤트 기간 : {event.startDate} ~ {event.endDate}</span>
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