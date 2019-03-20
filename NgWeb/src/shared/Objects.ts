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
      operationGroups: s001_002
  },
  {
      id: 2,
      fullname: 'Буртики',
      shortname: 'Бурт.',
      operationGroups: s001_002
  },
  {
      id: 3,
      fullname: 'Выточка',
      shortname: 'Выт-ка',
      operationGroups: s003_004
  },
  {
      id: 4,
      fullname: 'Выточки',
      shortname: 'Выт-ка',
      operationGroups: s003_004
  },
  {
      id: 5,
      fullname: 'Галтель',
      shortname: 'Галт.',
      operationGroups: s005_006
  },
  {
      id: 6,
      fullname: 'Галтели',
      shortname: 'Галт.',
      operationGroups: s005_006
  },
  {
      id: 7,
      fullname: 'Деталь',
      shortname: 'Дет.',
      operationGroups: s007_008
  },
  {
      id: 8,
      fullname: 'Детали',
      shortname: 'Дет.',
      operationGroups: s007_008
  },
  {
      id: 9,
      fullname: 'Заготовка',
      shortname: 'Загот.',
      operationGroups: [ 2, ...range(15, 17), 28, 30, 80, 81, ...range(83, 94) ]
  },
  {
      id: 10,
      fullname: 'Зуб',
      shortname: 'Зуб',
      operationGroups: s010_011
  },
  {
      id: 11,
      fullname: 'Зубья',
      shortname: 'Зубья',
      operationGroups: s010_011
  },
  {
      id: 12,
      fullname: 'Канавка',
      shortname: 'Канав.',
      operationGroups: s012_013
  },
  {
      id: 13,
      fullname: 'Канавки',
      shortname: 'Канав.',
      operationGroups: s012_013
  },
  {
      id: 14,
      fullname: 'Контур',
      shortname: 'К-р',
      operationGroups: [ ...range(4, 6), 15, ...range(18, 21), 28, 33, 36 ]
  },
  {
      id: 15,
      fullname: 'Конус',
      shortname: 'Кон.',
      operationGroups: [ 4, 5, 10, ...range(14, 16), ...range(18, 20), 22, 24, 26, 30, 33 ]
  },
  {
      id: 16,
      fullname: 'Лыска',
      shortname: 'Л-ка',
      operationGroups: s016_017
  },
  {
      id: 17,
      fullname: 'Лыски',
      shortname: 'Л-ки',
      operationGroups: s016_017
  },
  {
      id: 18,
      fullname: 'Отверстие',
      shortname: 'Отв.',
      operationGroups: s018_019
  },
  {
      id: 19,
      fullname: 'Отверстия',
      shortname: 'Отв.',
      operationGroups: s018_019
  },
  {
      id: 20,
      fullname: 'Паз',
      shortname: 'Паз',
      operationGroups: s020_021
  },
  {
      id: 21,
      fullname: 'Пазы',
      shortname: 'Пазы',
      operationGroups: s020_021
  },
  {
      id: 22,
      fullname: 'Поверхность',
      shortname: 'Поверх.',
      operationGroups: s022_023
  },
  {
      id: 23,
      fullname: 'Поверхности',
      shortname: 'Поверх.',
      operationGroups: s022_023
  },
  {
      id: 24,
      fullname: 'Пружина',
      shortname: 'Пруж.',
      operationGroups: s024_025
  },
  {
      id: 25,
      fullname: 'Пружины',
      shortname: 'Пруж.',
      operationGroups: s024_025
  },
  {
      id: 26,
      fullname: 'Резьба',
      shortname: 'Р-ба',
      operationGroups: [ 12, 13, 18, 30, 33, 36 ]
  },
  {
      id: 27,
      fullname: 'Рифление',
      shortname: 'Рифл.',
      operationGroups: [ 12, 13, 30, 33, 36 ]
  },
  {
      id: 28,
      fullname: 'Ступень',
      shortname: 'Ступ.',
      operationGroups: [ 15, ...range(18, 20), 30, 33, 36 ]
  },
  {
      id: 29,
      fullname: 'Сфера',
      shortname: 'Сфера',
      operationGroups: [ 5, 14, 15, ...range(18, 20), 30, 33 ]
  },
  {
      id: 30,
      fullname: 'Торец',
      shortname: 'Т-ц',
      operationGroups: s030_031
  },
  {
      id: 31,
      fullname: 'Торцы',
      shortname: 'Т-цы',
      operationGroups: s030_031
  },
  {
      id: 32,
      fullname: 'Фаска',
      shortname: 'Ф-ка',
      operationGroups: s032_033
  },
  {
      id: 33,
      fullname: 'Фаски',
      shortname: 'Ф-ки',
      operationGroups: s032_033
  },
  {
      id: 34,
      fullname: 'Червяк',
      shortname: 'Черв.',
      operationGroups: [ 13, 33 ]
  },
  {
      id: 35,
      fullname: 'Цилиндр',
      shortname: 'Цил.',
      operationGroups: [ 5, ...range(18, 21), ...range(29, 31), 33 ]
  },
];
