import * as fsTrees from '@hexlet/immutable-fs-trees'
import _ from 'lodash'

const changeOwner = (tree, owner) => {
  const name = fsTrees.getName(tree)
  const newMeta = _.cloneDeep(fsTrees.getMeta(tree))
  newMeta.owner = owner

  if (fsTrees.isFile(tree)) {
    return fsTrees.mkfile(name, newMeta)
  }

  const children = fsTrees.getChildren(tree)
  const newChildren = children.map((child) => changeOwner(child, owner))
  const newTree = fsTrees.mkdir(name, newChildren, newMeta)
  console.log(newTree)
  return newTree
}

const x = {
  name: '/',
  children: [
    { name: 'one', meta: {}, type: 'file' },
    { name: 'two', meta: {}, type: 'file' },
    { name: 'three', children: [], meta: {}, type: 'directory' },
  ],
  meta: { x: 1, 2: 3, 5: 7, owner: 'лось' },
  type: 'directory',
}

changeOwner(x, 'олень')
