"use client"
import styles from "./page.module.css"
import React, { useEffect } from "react"
import { Button, Stack } from "@mui/material"

export default function Home() {
  const arrayCount = 10
  const arrayQueue = new Array(arrayCount).fill(0)
  let front = -1
  let rear = -1
  let currentQueueSize = 0

  const updateQueueSize = () => {
    currentQueueSize = arrayQueue.filter((v) => v == 1).length
  }

  const addQueue = () => {
    if (front == arrayCount - 1) {
      front = -1
    }
    if (rear == arrayCount - 1) {
      rear = -1
    }
    if (currentQueueSize == arrayCount) {
      console.log("คิวเต็มแล้วจ้าาาาาาาา")
    } else if (arrayQueue[rear + 1] == 0) {
      arrayQueue[rear + 1] = 1
      updateQueueSize()

      rear = rear + 1
    }

    console.log("------------------------------------")
    console.log("Queue: ", arrayQueue)
    console.log("Front idx: ", front)
    console.log("Rear idx:", rear)
    console.log("Queue Size: ", currentQueueSize)
  }

  const removeFrontQueue = () => {
    if (front == arrayCount - 1) {
      front = -1
    }
    if (rear == arrayCount - 1) {
      rear = -1
    }
    if (currentQueueSize == 0) {
      console.log("คิวว่างมากนะ")
    } else if ((arrayQueue[front + 1] = 1 && front + 1 <= arrayCount)) {
      arrayQueue[front + 1] = 0
      front = front + 1
      updateQueueSize()
    }

    console.log("------------------------------------")
    console.log("Queue: ", arrayQueue)
    console.log("Front idx: ", front)
    console.log("Rear idx:", rear)
    console.log("Queue Size: ", currentQueueSize)
  }

  return (
    <main className={styles.main}>
      <div>
        <Stack spacing={3}>
          <div className={styles.center}>See results on the console</div>
          <Button variant="contained" onClick={addQueue}>
            Add
          </Button>
          <Button variant="contained" onClick={removeFrontQueue}>
            Remove Front
          </Button>
        </Stack>
      </div>
    </main>
  )
}
