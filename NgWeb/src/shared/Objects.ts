import { IObject } from './IObject';
import { range } from './Range';

const s001_002 = [ 1, 5, 14, 15, ...range(17, 21), 23, 24, 30, 33, 36 ];
const s003_004 = [ 30 ];
const s005_006 = [ 5, 7, 15, ...range(18, 20), 26, 30, 33 ];
const s007_008 = [ 1, ...range(3, 10), ...range(14, 36), ...range(80, 94) ];
const s010_011 = [ 6, 7, 9, ...range(13, 15), ...range(18, 21), 28, 32, 33, 36 ];
const s012_013 = [ 6, 15, ...range(18, 21), 28, 30, 31, 33, 36 ];
const s016_017 = [ 5, 15, 18, 21, 28, 33, 36 ];
const s018_019 = [ 5, 6, 10, ...range(18, 22), ...range(24, 27), 29, 30, 31, ...range(33, 36) ];
const s020_021 = [ 5, 6, 15, ...range(18, 21), 28, 33, 36 ];
const s022_023 = [ 1, 2, ...range(4, 10), 14, 15, ...range(18, 26), 28, ...range(30, 36) ];
const s024_025 = [ 11 ];
const s030_031 = [ 4, 5, ...range(17, 19), 33, 36 ];
const s032_033 = [ 5, 15, 18, 19, 26, 28, 30, 33, ...range(36, 100) ];

export const objects: IObject[] = [
  {
      id: 1,
      fullname: 'Буртик',
      shortname: 'Бурт.',
      actionIds: s001_002
  },
  {
      id: 2,
      fullname: 'Буртики',
      shortname: 'Бурт.',
      actionIds: s001_002
  },
  {
      id: 3,
      fullname: 'Выточка',
      shortname: 'Выт-ка',
      actionIds: s003_004
  },
  {
      id: 4,
      fullname: 'Выточки',
      shortname: 'Выт-ка',
      actionIds: s003_004
  },
  {
      id: 5,
      fullname: 'Галтель',
      shortname: 'Галт.',
      actionIds: s005_006
  },
  {
      id: 6,
      fullname: 'Галтели',
      shortname: 'Галт.',
      actionIds: s005_006
  },
  {
      id: 7,
      fullname: 'Деталь',
      shortname: 'Дет.',
      actionIds: s007_008
  },
  {
      id: 8,
      fullname: 'Детали',
      shortname: 'Дет.',
      actionIds: s007_008
  },
  {
      id: 9,
      fullname: 'Заготовка',
      shortname: 'Загот.',
      actionIds: [ 2, ...range(15, 17), 28, 30, 80, 81, ...range(83, 94) ]
  },
  {
      id: 10,
      fullname: 'Зуб',
      shortname: 'Зуб',
      actionIds: s010_011
  },
  {
      id: 11,
      fullname: 'Зубья',
      shortname: 'Зубья',
      actionIds: s010_011
  },
  {
      id: 12,
      fullname: 'Канавка',
      shortname: 'Канав.',
      actionIds: s012_013
  },
  {
      id: 13,
      fullname: 'Канавки',
      shortname: 'Канав.',
      actionIds: s012_013
  },
  {
      id: 14,
      fullname: 'Контур',
      shortname: 'К-р',
      actionIds: [ ...range(4, 6), 15, ...range(18, 21), 28, 33, 36 ]
  },
  {
      id: 15,
      fullname: 'Конус',
      shortname: 'Кон.',
      actionIds: [ 4, 5, 10, ...range(14, 16), ...range(18, 20), 22, 24, 26, 30, 33 ]
  },
  {
      id: 16,
      fullname: 'Лыска',
      shortname: 'Л-ка',
      actionIds: s016_017
  },
  {
      id: 17,
      fullname: 'Лыски',
      shortname: 'Л-ки',
      actionIds: s016_017
  },
  {
      id: 18,
      fullname: 'Отверстие',
      shortname: 'Отв.',
      actionIds: s018_019
  },
  {
      id: 19,
      fullname: 'Отверстия',
      shortname: 'Отв.',
      actionIds: s018_019
  },
  {
      id: 20,
      fullname: 'Паз',
      shortname: 'Паз',
      actionIds: s020_021
  },
  {
      id: 21,
      fullname: 'Пазы',
      shortname: 'Пазы',
      actionIds: s020_021
  },
  {
      id: 22,
      fullname: 'Поверхность',
      shortname: 'Поверх.',
      actionIds: s022_023
  },
  {
      id: 23,
      fullname: 'Поверхности',
      shortname: 'Поверх.',
      actionIds: s022_023
  },
  {
      id: 24,
      fullname: 'Пружина',
      shortname: 'Пруж.',
      actionIds: s024_025
  },
  {
      id: 25,
      fullname: 'Пружины',
      shortname: 'Пруж.',
      actionIds: s024_025
  },
  {
      id: 26,
      fullname: 'Резьба',
      shortname: 'Р-ба',
      actionIds: [ 12, 13, 18, 30, 33, 36 ]
  },
  {
      id: 27,
      fullname: 'Рифление',
      shortname: 'Рифл.',
      actionIds: [ 12, 13, 30, 33, 36 ]
  },
  {
      id: 28,
      fullname: 'Ступень',
      shortname: 'Ступ.',
      actionIds: [ 15, ...range(18, 20), 30, 33, 36 ]
  },
  {
      id: 29,
      fullname: 'Сфера',
      shortname: 'Сфера',
      actionIds: [ 5, 14, 15, ...range(18, 20), 30, 33 ]
  },
  {
      id: 30,
      fullname: 'Торец',
      shortname: 'Т-ц',
      actionIds: s030_031
  },
  {
      id: 31,
      fullname: 'Торцы',
      shortname: 'Т-цы',
      actionIds: s030_031
  },
  {
      id: 32,
      fullname: 'Фаска',
      shortname: 'Ф-ка',
      actionIds: s032_033
  },
  {
      id: 33,
      fullname: 'Фаски',
      shortname: 'Ф-ки',
      actionIds: s032_033
  },
  {
      id: 34,
      fullname: 'Червяк',
      shortname: 'Черв.',
      actionIds: [ 13, 33 ]
  },
  {
      id: 35,
      fullname: 'Цилиндр',
      shortname: 'Цил.',
      actionIds: [ 5, ...range(18, 21), ...range(29, 31), 33 ]
  },
];
