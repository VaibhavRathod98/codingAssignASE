import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase(); // Convert the input to lowercase

        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
            // The quick brown fox jumps over the lazy dog
            // Above sentence to check true condition of program
        } else {
            System.out.println("The input is not a pangram.");
            // To check the False write any sentence
        }
    }

    public static boolean isPangram(String str) {
        boolean[] alphabetCheck = new boolean[26];

        // Iterate through the characters of the input string
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            // Check if the character is an English lowercase letter
            if ('a' <= ch && ch <= 'z') {
                // Mark the corresponding index in the alphabetCheck array
                alphabetCheck[ch - 'a'] = true;
            }
        }

        // Check if all alphabet letters have been marked (i.e., all elements are true)
        for (boolean isPresent : alphabetCheck) {
            if (!isPresent) {
                return false;
            }
        }

        return true;
    }
}
