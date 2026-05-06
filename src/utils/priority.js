const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getTopNotifications = (notifications, limit = 10) => {

  return notifications
    .sort((a, b) => {

      const weightDiff =
        weights[b.Type] - weights[a.Type];

      if (weightDiff !== 0) {
        return weightDiff;
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );

    })
    .slice(0, limit);

};