export type BonusCardType = {
  id: number | string;
  imageSrc: string;
  freeSpins: number;
  percentUp: string;
  bonus: number;
  isExclusive: boolean;
};

export type BonusCardProps = {
  data: BonusCardType;
};
