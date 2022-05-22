import html2canvas from "html2canvas";
import { useState } from "react";
import "./App.css";
import UserCard from "./components/userCard";
import { IBILIBILI_USER_INFO } from "./IType/interface";

function App() {
  const [userInfo, setUserInfo] = useState<IBILIBILI_USER_INFO>();
  const [MidNumber, setMidNumber] = useState<string>("");
  const [loadImages, setLoadImages] = useState("");
  const elem: HTMLElement = document.getElementById("card") as HTMLElement;
  const getUserInfo = () => {
    if (!MidNumber) return;
    fetch("/bilibili/x/space/acc/info?mid=" + MidNumber).then(async (res) => {
      setUserInfo((await res.json()) as IBILIBILI_USER_INFO);
      loadImage();
      // console.log(userInfo?.data);
    });
  };
  const loadImage = () => {
    //@ts-ignore
    new html2canvas(elem, {
      useCORS: true,
      allowTaint: true,
    }).then((canvas: HTMLCanvasElement) => {
      setLoadImages(canvas.toDataURL());
      console.log(canvas.toDataURL());
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
        <div id="card">{userInfo && <UserCard userInfo={userInfo} />}</div>

        {loadImages && (
          <>
          {
            loadImage()
          }
            <div>
              <h4>复制base64代码</h4>
              <textarea value={loadImages} />
            </div>
            图片预览效果
            <img src={loadImages} alt="" />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
