import { IAction } from './IAction';
import { emptyId } from './EmptyId';

const commonOperationGroups = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

export const actions: IAction[] = [
  {
    id: emptyId,
    name: '',
    operationGroups: [],
  },
  {
      id: 1,
      name: 'Вальцевать',
      operationGroups: [ 14 ]
  },
  {
      id: 2,
      name: 'Врезаться',
      operationGroups: [ 14 ]
  },
  {
      id: 3,
      name: 'Гальтовать',
      operationGroups: [ 6 ]
  },
  {
      id: 4,
      name: 'Гравировать',
      operationGroups: [ 15 ]
  },
  {
      id: 5,
      name: 'Довести',
      operationGroups: [ 6 ]
  },
  {
      id: 6,
      name: 'Долбить',
      operationGroups: [ 3, 4 ]
  },
  {
      id: 7,
      name: 'Закруглить',
      operationGroups: [ 1, 2, 4 ]
  },
  {
      id: 8,
      name: 'Заточить',
      operationGroups: [ 16 ]
  },
  {
      id: 9,
      name: 'Затылковать',
      operationGroups: [ 14 ]
  },
  {
      id: 10,
      name: 'Зенкеровать',
      operationGroups: [ 1, 2, 5, 8, 10, 12, 14 ]
  },
  {
      id: 11,
      name: 'Навить',
      operationGroups: [ 1, 2, 14 ]
  },
  {
    id: 12,
    name: 'Накатать',
    operationGroups: [ 1, 2, 4, 11 ]
  },
  {
      id: 13,
      name: 'Нарезать',
      operationGroups: [ 1, 2, 5, 8, 10, 11, 12, 14 ]
  },
  {
      id: 14,
      name: 'Обкатать',
      operationGroups: [ 4 ]
  },
  {
      id: 15,
      name: 'Опилить',
      operationGroups: [ 6 ]
  },
  {
      id: 16,
      name: 'Отрезать',
      operationGroups: [ 1, 2, 5, 7, 8, 10, 14 , 15]
  },
  {
      id: 17,
      name: 'Подрезать',
      operationGroups: [ 1, 2, 5, 10, 14 ]
  },
  {
      id: 18,
      name: 'Полировать',
      operationGroups: [ 1, 2, 5, 6, 12, 14 ]
  },
  {
      id: 19,
      name: 'Притирать',
      operationGroups: [ 6 ]
  },
  {
      id: 20,
      name: 'Приработать',
      operationGroups: [ 4 ]
  },
  {
      id: 21,
      name: 'Протянуть',
      operationGroups: [ 4, 9 ]
  },
  {
      id: 22,
      name: 'Развернуть',
      operationGroups: [ 1, 2, 5, 8, 10, 12, 14 ]
  },
  {
      id: 25,
      name: 'Рассверлить',
      operationGroups: [ 1, 2, 5, 8, 10, 12, 14 ]
  },
  {
      id: 26,
      name: 'Расточить',
      operationGroups: [ 1, 2, 5, 8, 10, 12, 14 ]
  },
  {
      id: 27,
      name: 'Сверлить',
      operationGroups: [ 13 ]
  },
  {
      id: 28,
      name: 'Строгать',
      operationGroups: [ 13 ]
  },
  {
      id: 29,
      name: 'Суперфинишировать',
      operationGroups: [ 6 ]
  },
  {
      id: 30,
      name: 'Точить',
      operationGroups: [ 1, 2, 5, 8, 10, 14 ]
  },
  {
      id: 31,
      name: 'Хонинговать',
      operationGroups: [ 1, 2, 6 ]
  },
  {
      id: 32,
      name: 'Шевинговать',
      operationGroups: [ 1, 2, 4 ]
  },
  {
      id: 33,
      name: 'Шлифовать',
      operationGroups: [ 1, 2, 4, 16 ]
  },
  {
      id: 34,
      name: 'Целковать',
      operationGroups: [ 1, 2, 5, 8, 10, 12, 14 ]
  },
  {
      id: 35,
      name: 'Центровать',
      operationGroups: [ 1, 2, 5, 8, 10, 12, 14, 15 ]
  },
  {
      id: 36,
      name: 'Фрезировать',
      operationGroups: [ 1, 2, 4, 5, 8, 11, 15 ]
  },
  {
      id: 80,
      name: 'Выверить',
      operationGroups: commonOperationGroups
  },
  {
      id: 81,
      name: 'Закрепить',
      operationGroups: commonOperationGroups
  },
  {
      id: 82,
      name: 'Настроить',
      operationGroups: commonOperationGroups
  },
  {
      id: 83,
      name: 'Переустановить',
      operationGroups: commonOperationGroups
  },
  {
      id: 84,
      name: 'Переустановить и закрепить',
      operationGroups: commonOperationGroups
  },
  {
      id: 85,
      name: 'Переустановить, выверить и закрепить',
      operationGroups: commonOperationGroups
  },
  {
      id: 86,
      name: 'Переместить',
      operationGroups: commonOperationGroups
  },
  {
      id: 87,
      name: 'Поджать',
      operationGroups: commonOperationGroups
  },
  {
      id: 88,
      name: 'Проверить',
      operationGroups: commonOperationGroups
  },
  {
      id: 89,
      name: 'Смазать',
      operationGroups: commonOperationGroups
  },
  {
      id: 90,
      name: 'Снять',
      operationGroups: commonOperationGroups
  },
  {
      id: 91,
      name: 'Установить',
      operationGroups: commonOperationGroups
  },
  {
      id: 92,
      name: 'Установить и выверить',
      operationGroups: commonOperationGroups
  },
  {
      id: 93,
      name: 'Установить и закрепить',
      operationGroups: commonOperationGroups
  },
  {
      id: 94,
      name: 'Установить, выверить и закрепить',
      operationGroups: commonOperationGroups
  }
];
