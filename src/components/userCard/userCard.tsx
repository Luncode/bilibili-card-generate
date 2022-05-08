import { FC } from "react";
import { IBILIBILI_USER_INFO } from "../../IType/interface";

interface IUserCard{
    userInfo:IBILIBILI_USER_INFO
}

const UserCard: FC<IUserCard>= ({userInfo}) => {
  return (
    <div className="userInfo">
      <div className="">{userInfo?.data.name}</div>
      <img className="userFace" src={userInfo?.data.face} alt="" />
      <div className="userStatus">
        <div>
          直播间：{userInfo.data.live_room.liveStatus == 1 ? "在线" : "离线"}
        </div>
        <div>用户等级：{userInfo.data.level}</div>
        <div>硬币数量：{userInfo.data.coins}</div>
      </div>
    </div>
  );
};

export default UserCard;
