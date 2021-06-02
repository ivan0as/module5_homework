let x;
x=+prompt('Введите число');
if (typeof x == 'number' && !isNaN(x)) {
  alert(typeof x);
  if (x % 2 == 0) {
    alert('Чётное');
} else  {
    alert('Нечётное');
};
} else {
  alert('Упс, кажется Вы ошиблись');
};