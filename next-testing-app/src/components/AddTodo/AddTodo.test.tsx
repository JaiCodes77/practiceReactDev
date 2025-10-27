import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTodo from "./AddTodo";

describe("AddTodo Component", () => {
  it("should render the addTodo button", () => {
    const mockOnAdd = jest.fn();
    render(<AddTodo todo="add todo" onAdd={mockOnAdd} />);

    const button = screen.getByRole("button", { name: /add todo/i });
    expect(button).toBeInTheDocument();
  });

  it("should call onAdd when the button is clicked", async () => {
    const user = userEvent.setup();
    const mockOnAdd = jest.fn();

    render(<AddTodo todo="buy milk" onAdd={mockOnAdd} />);

    const button = screen.getByRole("button", { name: /add todo/i });
    await user.click(button);

    expect(mockOnAdd).toHaveBeenCalled();
  });

  it("should call onAdd with the correct argument", async () => {
    const user = userEvent.setup();
    const mockOnAdd = jest.fn();
    const todotext = "Buy Groceries";

    render(<AddTodo todo={todotext} onAdd={mockOnAdd} />);

    const button = screen.getByRole("button", { name: /add todo/i });
    await user.click(button);

    expect(mockOnAdd).toHaveBeenCalledWith("Buy Groceries");
  });

  it("should call the onAdd function only once per click", async () => {
    const user = userEvent.setup();
    const mockOnAdd = jest.fn();

    render(<AddTodo todo="test" onAdd={mockOnAdd} />);

    const button = screen.getByRole("button", { name: /add todo/i });
    await user.click(button);

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
    // expect(mockOnAdd).toHaveBeenCalledWith('');
  });

  it("calls onAdd multiple times when clicked multiple times", async () => {
    const user = userEvent.setup();
    const mockOnAdd = jest.fn();

    render(<AddTodo todo="Test" onAdd={mockOnAdd} />);

    const button = screen.getByRole("button", { name: /add todo/i });

    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(mockOnAdd).toHaveBeenCalledTimes(3);
  });
});
