import { useEffect, useState } from "react";
import "./App.css";
import { IBILIBILI_USER_INFO } from "./IType/interface";

function App() {
  const [userInfo, setUserInfo] = useState<IBILIBILI_USER_INFO>();
  const [MidNumber, setMidNumber] = useState<string>();
  const getUserInfo = () => {
    fetch("/bilibili/x/space/acc/info?mid=" + MidNumber).then(async (res) => {
      setUserInfo((await res.json()) as IBILIBILI_USER_INFO);
      console.log(userInfo?.data);
    });
  };
  // useEffect(()=>{
  //   fetch('/bilibili/x/space/acc/info?mid=22753506').then(res => {
  //     setUserInfo((res.json() as unknown as IBILIBILI_USER_INFO))
  //     console.log(userInfo?.data.name);
  //   })
  // },[])
  return (
    <div className="App">
      <header className="App-header">
        <p>本项目使用Vite开发</p>
        <p>#bilibili-card-generate 生成用户卡片、视频卡片 部署Vercel</p>
        <p>正在工事中</p>
        <div className="MidNumber">
          <span>输入Mid测试: </span>
          <input
            value={MidNumber}
            onChange={(e) => {
              setMidNumber(e.target.value);
            }}
          />
          <button onClick={getUserInfo}>获取</button>
        </div>
        {userInfo && (
          <div className="userInfo">
            <div className="">{userInfo?.data.name}</div>
            <img className="userFace" src={userInfo?.data.face} alt="" />
            <div className="userStatus">
              <div>直播间：{userInfo.data.live_room.liveStatus == 1 ? '在线':'离线'}</div>
              <div>用户等级：{userInfo.data.level}</div>
              <div>硬币数量：{userInfo.data.coins}</div>
            </div>
          </div>
        )}
        {/* <textarea value={userInfo?.data.coins}  /> */}
      </header>
    </div>
  );
}

export default App;
