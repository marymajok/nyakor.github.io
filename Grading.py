def calculate_grade(marks):
    if 90 <= marks <= 100:
        return 'A'
    elif 87 <= marks <= 89:
        return 'A-'
    elif 84 <= marks <= 86:
        return 'B'
    elif 80 <= marks <= 83:
        return 'B-'
    elif 77 <= marks <= 79:
        return 'C+'
    elif 74 <= marks <= 76:
        return 'C'
    elif 67 <= marks <= 69:
        return 'D+'
    elif 64 <= marks <= 66:
        return 'D'
    elif 62 <= marks <= 63:
        return 'D-'
    elif 0 <= marks <= 59:
        return 'F'
    else:
        return 'Invalid'

def main():
    subjects = [
        "APT1030 - FUNDAMENTALS TO PROGRAMMING LANGUAGES",
        "BUS3010 - BUSINESS LAW",
        "IST2010 - COMPUTER ORGANIZATION AND ASSEMBLY PROGRAMMING",
        "FIL1010 - FUNDAMENTALS OF INFORMATION LITERACY",
        "MGT3010 - OVERVIEW OF MANAGEMENT PRACTICE"
    ]

    num_subjects = len(subjects)

    while True:
        total_marks = 0
        try:
            for subject_index, subject in enumerate(subjects, start=1):
                marks = float(input(f"Enter marks for {subject}: "))
                if marks.is_integer():
                    marks = int(marks)

                if 0 <= marks <= 100:
                    subject_grade = calculate_grade(marks)
                    print(f"Grade for {subject}: {subject_grade}")
                    total_marks += marks
                else:
                    print("Marks should be between 0 and 100. Try again.")
                    break

            else:
                average_marks = total_marks / num_subjects
                overall_grade = calculate_grade(average_marks)
                print(f"\nOverall Grade for all subjects: {overall_grade}\n")
                
        except ValueError:
            user_input = input("Invalid input. Enter 'exit' to terminate or press Enter to continue: ")
            if user_input.lower() == 'exit':
                break

if __name__ == "__main__":
    main()
