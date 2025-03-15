/** 날짜 형식(yyyy년 mm월 dd일) 포맷팅 */
export function formatDate(date: string): string {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${year}년 ${month}월 ${day}일`;
}

/** 날짜+시간 형식(yy.mm..dd hh:MM) 포맷팅 */
export function formatDateTime(date: string): string {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear().toString().slice(-2);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  return `${year}.${month}.${day} ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
}

/** 한국 시간 기준으로 상대시간 리턴 */
export function formatRelativeDate(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);

  // 한국 시간으로 (UTC+9) 변환
  const KST_OFFSET = 9 * 60 * 60 * 1000;
  const nowKST = new Date(now.getTime() + KST_OFFSET);
  const dateKST = new Date(date.getTime() + KST_OFFSET);

  const diff = nowKST.getTime() - dateKST.getTime();
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);

  if (diffMinutes < 1) return "방금 전";
  if (diffMinutes < 60) return `${diffMinutes}분 전`;
  if (diffHours < 24) return `${diffHours}시간 전`;
  if (diffDays === 1) return "어제";
  if (diffDays <= 3) return `${diffDays}일 전`;
  if (diffDays <= 7) return "7일 전";
  if (diffMonths < 1) return "한 달 전";

  return `${diffMonths}개월 전`;
}
