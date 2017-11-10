//与后端真实交互的可复用函数均写在这里，方便随时切换调试和线上状态
const basicUrl = "api"

export const Index1 = basicUrl + "/index"

export const AllNews=basicUrl+'/news'
export const NewsDetail=basicUrl+'/news/newsdetail'
export const AllNotice=basicUrl+'/news/notice'
export const NoticeDetail=basicUrl+'/news/noticedetail'
