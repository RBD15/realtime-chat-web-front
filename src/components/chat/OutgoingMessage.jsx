import React from 'react'
import { formatDate } from '../../utils/format'
export const OutgoingMessage = ({message}) => {
  
  return (
    <div className="outgoing_msg">
        <div className="sent_msg">
            <p>{message.content}</p>
            <span className="time_date">{formatDate(message.date)}</span>
        </div>
    </div>
  )
}
