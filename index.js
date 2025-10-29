import * as fsTrees from '@hexlet/immutable-fs-trees'
// prettier-ignore
// mkdir вторым параметром принимает список детей,
// которые могут быть либо директориями, созданными mkdir,
// либо файлами, созданными mkfile

const tree = fsTrees.mkdir('etc', [
  fsTrees.mkfile('bashrc', { size: 75 }),
  fsTrees.mkdir('consul', [
    fsTrees.mkfile('config.json'),], { owned: 'nobody' }),
])

console.dir(tree, { depth: null, colors: true })
