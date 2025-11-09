import * as fsTrees from '@hexlet/immutable-fs-trees'

//prettier-ignore

const tree = fsTrees.mkdir('/', [
  fsTrees.mkdir('etc', [
    fsTrees.mkdir('apache'),
    fsTrees.mkdir('nginx', [
        fsTrees.mkfile('nginx.conf')
    ]),
    fsTrees.mkdir('consul', [
        fsTrees.mkfile('config.json'), fsTrees.mkdir('data')
    ]),
  ]),
  fsTrees.mkdir('logs'),
  fsTrees.mkfile('hosts'),
])

// const findEmptyDirPaths = (tree) => {
//   const name = fsTrees.getName(tree)
//   const children = fsTrees.getChildren(tree)
//   console.log(children)

//   // Если детей нет, то добавляем директорию
//   if (children.length === 0) {
//     return name
//   }

//   // Фильтруем файлы, они нас не интересуют
//   const emptyDirNames = children
//     .filter((child) => !fsTrees.isFile(child))
//     // Ищем пустые директории внутри текущей
//     // flatMap выправляет массив, так что он остаётся плоским
//     .flatMap(findEmptyDirPaths)
//   console.log(emptyDirNames)

//   return emptyDirNames
// }

// findEmptyDirPaths(tree) // ['apache', 'data', 'logs']

const findEmptyDirPaths = (tree) => {
  // Внутренняя функция, которая может передавать аккумулятор
  // В качестве аккумулятора выступает depth, переменная, содержащая текущую глубину
  const iter = (node, depth) => {
    const name = fsTrees.getName(node)
    const children = fsTrees.getChildren(node)

    // Если директория пустая, то добавляем ее в список
    if (children.length === 0) {
      return name
    }

    // Если это второй уровень вложенности, и директория не пустая
    // то не имеет смысла смотреть дальше
    if (depth === 2) {
      // Почему возвращается именно пустой массив?
      // Потому что снаружи выполняется flat
      // Он раскрывает пустые массивы
      return []
    }

    // Оставляем только директории
    console.info('🚀 ~ iter ~ директории:', директории)
    console.info('🚀 ~ iter ~ директории:', директории)
    return (
      children
        .filter(fsTrees.isDirectory)
        // Не забываем увеличивать глубину
        .flatMap((child) => iter(child, depth + 1))
    )
  }

  // Начинаем с глубины 0
  return iter(tree, 0)
}

findEmptyDirPaths(tree) // ['apache', 'logs']
