import Title from './components/Title'
import { useState } from 'react'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  //when is true - show modal window
  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => id !== event.id)
    })
  }

  const addEvent = (event) => {
    setEvents((prevEvent) => {
      return [...prevEvent, event]
    })
    setShowModal(false)
  }

  const subtitle = 'All the latest events in Marioland'

  return (
    <div className='App'>
      <Title title='Events in Your area' subtitle={subtitle} />

      {/* <Title title='Another title' subtitle='another subtitle' /> */}

      {showEvents && (
        <div>
          <button className='showHide-btn' onClick={() => setShowEvents(false)}>
            hide events
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button className='showHide-btn' onClick={() => setShowEvents(true)}>
            Show events
          </button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <br />
        <button className='showHide-btn' onClick={() => setShowModal(true)}>
          Add New Event
        </button>
      </div>
    </div>
  )
}

export default App
