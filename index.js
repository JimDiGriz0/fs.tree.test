import * as fsTrees from '@hexlet/immutable-fs-trees'
// prettier-ignore
// mkdir вторым параметром принимает список детей,
// которые могут быть либо директориями, созданными mkdir,
// либо файлами, созданными mkfile

// const tree = fsTrees.mkdir('etc', [
//   fsTrees.mkfile('bashrc', { size: 75 }),
//   fsTrees.mkdir('consul', [
//     fsTrees.mkfile('config.json'),], { owned: 'nobody' }),
// ])

// console.dir(tree, { depth: null, colors: true })

const tree = fsTrees.mkdir('/', [
  fsTrees.mkdir('etc', [
    fsTrees.mkfile('bashrc'),
    fsTrees.mkfile('consul.cfg'),
  ]),
  fsTrees.mkfile('hexletrc'),
  fsTrees.mkdir('bin', [
    fsTrees.mkfile('ls'),
    fsTrees.mkfile('cat'),
  ]),
])

const x = fsTrees.getName(tree)
const y = fsTrees.getChildren(tree)
console.log(x)
console.dir(y, { depth: 5 })

const dfs = (tree) => {
  // Распечатываем содержимое узла
  console.log(fsTrees.getName(tree))
  // Если это файл, то возвращаем управление
  if (fsTrees.isFile(tree)) {
    return
  }

  // Получаем детей
  const children = fsTrees.getChildren(tree)

  // Применяем функцию dfs ко всем дочерним элементам
  // Множество рекурсивных вызовов в рамках одного вызова функции
  // называется древовидной рекурсией
  children.forEach(dfs)
}

// dfs(tree)
