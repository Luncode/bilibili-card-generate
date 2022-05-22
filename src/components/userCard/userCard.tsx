import { FC } from "react";
import { IBILIBILI_USER_INFO } from "../../IType/interface";

interface IUserCard {
  userInfo: IBILIBILI_USER_INFO;
}

const UserCard: FC<IUserCard> = ({ userInfo }) => {
  return (
    <div className="userInfo">
      <div className="flex_context">
      <img className="userFace" src={userInfo?.data.face} alt="" />
      <div className="userName flex_context">
        {userInfo?.data.name}
        <div>
          {userInfo?.data?.vip && (
            <>
              {
                <img className="bigvip" src={userInfo?.data?.vip.avatar_subscript_url}/>
              }
            </>
          )}
        </div>
      </div>
      </div>
      <div className="userContanier">
        <div className="userStatus">
          <div>
            直播间：{userInfo.data.live_room.liveStatus == 1 ? "在线" : "离线"}
          </div>
          <div>用户等级：<span className="levelLabel">{userInfo.data.level}</span></div>
          <div>硬币数量：{userInfo.data.coins}</div>
        </div>
        <div className="user_sign">{userInfo.data.sign}</div>
      </div>
      <div className="user_link">
          <a className="btn follow_btn" href={`https://space.bilibili.com/${userInfo.data.mid}`} target="_blank">+关注</a>
          <a className="btn call_btn" href={`https://message.bilibili.com/#/whisper/mid${userInfo.data.mid}`} target="_blank">私信</a>
        </div>
    </div>
  );
};

export default UserCard;
