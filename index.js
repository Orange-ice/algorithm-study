// 快速排序

// 选择一个基准，大于基准右边，小于基准左边
const quickSort = (arr) => {
  if (arr.length <= 1) return arr

  const halfIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(halfIndex, 1)[0]
  const left = []
  const right = []

  arr.forEach(item => {
    if (item < pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  })
  return quickSort(left).concat([pivot], quickSort(right))
}


const list = [12, 52, 696, 2, 45, 99, 20, 465]
// console.log(quickSort(list))


// 计数排序

// 假设我们有[1,2,3,1,0,4]这六个数，这里面最大的值为4，那么我们创建一个长度为4的数组，每个元素默认为0。这相当于选举排序，一共有6个投票箱，1就投1号箱，0就投入0号箱。注意，这些箱本来就是已经排好序，并且箱的编号就是代表原数组的元素。当全部投完时，0号箱有1个，1号箱有2个，2号箱有1个，3号箱有1，4号箱有1个。然后我们从这些箱的所有数依次出来，放到新数组，就神奇地排好序了。

const countSort = (arr) => {
  // 获取数组中最大项
  const max = Math.max.apply(null, arr)
  const buckets = new Array(max)
  buckets.fill(0)

  arr.forEach(item => {
    buckets[item] += 1
  })

  const result = []
  buckets.forEach((item, index) => {
    if (item !== 0) {
      if (item > 1) {
        for (let i = 0; i < item; i++) {
          result.push(index)
        }
      } else {
        result.push(index)
      }
    }
  })
  return result

}

// console.log(countSort(list))


// 大数相加
const a = '9007199254740991'
const b = '1234567899999999999'

const add = (a, b) => {
  const maxLength = Math.max(a.length, b.length)
  a = a.padStart(maxLength, '0')
  b = b.padStart(maxLength, '0')

  let list = []
  const carry = []

  for (let i = 0; i < maxLength; i++) {
    const sum = parseInt(a[i]) + parseInt(b[i])
    list.push(sum % 10) // 个位
    carry.push(Math.floor(sum / 10)) // 进位
  }

  for (let i = list.length - 2; i >= 0; i--) {
    const sum = list[i] + carry[i + 1]

    // 各位加上进位
    if (sum >= 10) {
      list[i - 1] += 1
      list[i] = sum % 10
    } else {
      list[i] = sum
    }

    // 如果进位后还大于10
    if (list[i] >= 10) {
      list[i] = sum % 10
      list[i - 1] += 1
    }

  }

  return list.join('')
}

add(a, b)


// 两数之和

const nums = [2, 7, 11, 15], target = 18

const twoSum = (nums, target) => {
  const myMap = new Map()

  nums.forEach((item, index) => {
    myMap.set(item, index)
  })

  let result

  nums.forEach((item, index) => {
    const complement = target - item
    if(myMap.has(complement) && myMap.get(complement) !== index){
      result = [index, myMap.get(complement)].sort()
    }
  })

  return result || 'no result'
}

console.log(twoSum(nums, target));
