export interface IUSER_INFO{
    mid: number;
    name: string;
    sex: string;
    face: string;
    face_nft: number;
    sign: string;
    rank: number;
    level: number;
    jointime: number;
    moral: number;
    silence: number;
    coins: number;
    fans_badge: boolean;
    fans_medal: FansMedal;
    official: Official;
    vip: Vip;
    pendant: Pendant;
    nameplate: Nameplate;
    user_honour_info: UserHonourInfo;
    is_followed: boolean;
    top_photo: string;
    theme: any;
    sys_notice: any;
    live_room: LiveRoom;
    birthday: string;
    school: string;
    profession: Profession;
    tags: string;
    series: Series;
    is_senior_member: number;
  }
  
  interface FansMedal {
    show: boolean;
    wear: boolean;
    medal: Medal;
  }
  
  interface Label {
    path: string;
    text: string;
    label_theme: string;
    text_color: string;
    bg_style: number;
    bg_color: string;
    border_color: string;
  }
  
  interface LiveRoom {
    roomStatus: number;
    liveStatus: number;
    url: string;
    title: string;
    cover: string;
    roomid: number;
    roundStatus: number;
    broadcast_type: number;
    watched_show: WatchedShow;
  }
  
  interface Medal {
    uid: number;
    target_id: number;
    medal_id: number;
    level: number;
    medal_name: string;
    medal_color: number;
    intimacy: number;
    next_intimacy: number;
    day_limit: number;
    medal_color_start: number;
    medal_color_end: number;
    medal_color_border: number;
    is_lighted: number;
    light_status: number;
    wearing_status: number;
    score: number;
  }
  
  interface Nameplate {
    nid: number;
    name: string;
    image: string;
    image_small: string;
    level: string;
    condition: string;
  }
  
  interface Official {
    role: number;
    title: string;
    desc: string;
    type: number;
  }
  
  interface Pendant {
    pid: number;
    name: string;
    image: string;
    expire: number;
    image_enhance: string;
    image_enhance_frame: string;
  }
  
  interface Profession {
    name: string;
    department: string;
    title: string;
    is_show: number;
  }
  
  export interface IBILIBILI_USER_INFO {
    code: number;
    message: string;
    ttl: number;
    data: IUSER_INFO;
  }
  
  interface Series {
    user_upgrade_status: number;
    show_upgrade_window: boolean;
  }
  
  interface UserHonourInfo {
    mid: number;
    colour: string;
    tags: any[];
  }
  
  interface Vip {
    type: number;
    status: number;
    due_date: number;
    vip_pay_type: number;
    theme_type: number;
    label: Label;
    avatar_subscript: number;
    nickname_color: string;
    role: number;
    avatar_subscript_url: string;
  }
  
  interface WatchedShow {
    switch: boolean;
    num: number;
    text_small: string;
    text_large: string;
    icon: string;
    icon_location: string;
    icon_web: string;
  }
  
  