import { renderWithProviders } from "src/testUtils"
import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { AddServer } from "./AddServer"
import React from "react"

describe("AddServer", () => {
  const init = () => renderWithProviders(<AddServer />)
  const getAddButton = () => screen.getByRole("button", { name: "add" })

  it("renders add button", () => {
    init()

    expect(getAddButton()).toBeInTheDocument()
  })

  describe("dialog", () => {
    const openDialog = () => userEvent.click(getAddButton())

    it("opens dialos when clicking add button", () => {
      init()

      expect(screen.queryByRole("dialog")).toBeNull()

      openDialog()

      expect(
        screen.getByRole("dialog", { name: /create server/i })
      ).toBeDefined()
      expect(screen.getByRole("button", { name: /save/i })).toBeDefined()
    })

    it("can close dialog", async () => {
      init()

      screen.debug()
      openDialog()
      screen.debug()
      userEvent.click(screen.getByRole("button", { name: /cancel/i }))
      screen.debug()

      await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull())
    })

    it.todo("can save a server")
  })
})
