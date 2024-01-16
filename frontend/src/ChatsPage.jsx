// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '030f4677-6805-4c74-83b6-af4c84e0bbd4', props.user.username, 
//     props.user.secret
//     );
//     return (
//     <div style={{ height: '100vh' }}>
//         <MultiChatSocket {...chatProps} />
//         <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
//     </div>
//     )
// }

// export default ChatsPage


import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
    <PrettyChatWindow
      projectId="030f4677-6805-4c74-83b6-af4c84e0bbd4"
      username = { props.user.username }
      secret= {props.user.secret}
      style={{ height: '100%' }}
    />
    </div>
  );
}

export default ChatsPage