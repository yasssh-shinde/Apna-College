package Java;
import java.util.Scanner;
public class _03_InputOutput {
    public static void main(String[] args) {
        // Create a Scanner object for input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for their name
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Prompt the user for their age
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        // Prompt the user for their salary
        System.out.print("Enter your salary: ");
        double salary = scanner.nextDouble();

        // Print the collected information
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);

        // Close the scanner
        scanner.close();
    }
}