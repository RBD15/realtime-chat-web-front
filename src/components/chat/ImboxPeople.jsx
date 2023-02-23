import React from 'react'
import { HeadingSearch } from "./HeadingSearch";
import { ChatList } from "./ChatList";

export const ImboxPeople = () => {
  return (
      <div className="inbox_people">
          <HeadingSearch></HeadingSearch>
          <div className="inbox_chat">
              <ChatList></ChatList>
          </div>
      </div>
  )
}
