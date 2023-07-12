export enum Colors {
  imageBackgroundColor = '#15181d',
  backgroundColor = '#15181e',

  cardColor = '#1c1f27',

  lightgrey = '#e0e0e0',
  red = 'red',
  pastelRed = '#FF3D33',
  shadow = '#171717',

  dodgerblue = '#1e90ff',
}

export const getQualityColor = (quality: number) => {
  return quality >= 100
    ? '#de7016'
    : quality >= 90
    ? '#b92bd0'
    : quality >= 70
    ? '#3361b6'
    : quality >= 30
    ? '#5ea91b'
    : quality >= 10
    ? '#a19911'
    : '#980b0b';
};

export const getGradeBackgroundColor = (grade?: number | null | undefined) => {
  return grade === 7
    ? '#288d8d'
    : 6
    ? '#b7a68d'
    : 5
    ? '#703116'
    : 4
    ? '#705116'
    : 3
    ? '#3e1670'
    : 2
    ? '#164b70'
    : 1
    ? '#2d7016'
    : '#313131';
};
