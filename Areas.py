import math

def get_shape_area():
    while True:
        shape = input("Enter the shape (circle, rectangle, triangle): ")
        if shape == "circle":
            radius = float(input("Enter the radius: "))
            area = math.pi * radius ** 2
        elif shape == "rectangle":
            length = float(input("Enter the length: "))
            width = float(input("Enter the width: "))
            area = length * width
        elif shape == "triangle":
            base = float(input("Enter the base: "))
            height = float(input("Enter the height: "))
            area = 0.5 * base * height
        else:
            print("Invalid shape. Please try again.")
            continue

        print(f"The area of the shape is: {area}")

        user_input = input("Do you want to continue? (yes/no): ").lower()
        if user_input != "yes":
            break

get_shape_area()
