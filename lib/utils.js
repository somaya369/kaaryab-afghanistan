// Returns deadline text and badge flags for opportunity cards and details.
export function getDeadlineStatus(deadline) {
  const today = new Date();
  const deadlineDate = new Date(deadline);

  today.setHours(0, 0, 0, 0);
  deadlineDate.setHours(0, 0, 0, 0);

  const dayInMs = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((deadlineDate - today) / dayInMs);

  if (daysLeft < 0) {
    return {
      text: "Expired",
      daysLeft,
      isExpired: true,
      isExpiringSoon: false,
    };
  }

  return {
    text: `${daysLeft} days left`,
    daysLeft,
    isExpired: false,
    isExpiringSoon: daysLeft <= 7,
  };
}
