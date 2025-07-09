import java.util.Scanner;

public class InputOutputExample {
    public static void main(String[] args) {
        // Create a Scanner object to take input from the user
        Scanner scanner = new Scanner(System.in);

        // Ask for user's name
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Ask for user's age
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        // Display the result
        System.out.println("Hello " + name + "! You are " + age + " years old.");

        // Close the scanner
        scanner.close();
    }
}
