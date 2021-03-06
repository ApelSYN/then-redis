import expect from 'expect'
import db from './db'

describe('scard', () => {
  describe('when a set is empty', () => {
    it('returns 0', () =>
      db.scard('my-set').then((cardinality) => {
        expect(cardinality).toBe(0)
      })
    )
  })

  describe('when a set has 4 members', () => {
    it('returns the cardinality of the set', () =>
      db.sadd('my-set', 1, 2, 3, 4).then((numItemsAdded) => {
        expect(numItemsAdded).toBe(4)
        return db.scard('my-set').then((cardinality) => {
          expect(cardinality).toBe(4)
        })
      })
    )
  })
})
