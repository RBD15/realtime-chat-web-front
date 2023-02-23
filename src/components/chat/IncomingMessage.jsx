import React from 'react'
import { formatDate } from '../../utils/format'

export const IncomingMessage = ({message}) => {

  return (
    <div className="incoming_msg">
        <div className="incoming_msg_img">
            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
        </div>
        <div className="received_msg">
            <div className="received_withd_msg">
                <p>{message.content}</p>
                <span className="time_date"> {formatDate(message.date)}</span>
            </div>
        </div>
    </div>
  )
}
