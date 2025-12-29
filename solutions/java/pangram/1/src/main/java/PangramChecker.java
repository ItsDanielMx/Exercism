import java.util.*;

public class PangramChecker {

    public boolean isPangram(String input) {
        Set<Character> uniqueChars = new HashSet<>();
        for(int i = 0; i < input.length(); i++) {
            char character = Character.toLowerCase(input.charAt(i));
            if (character >= 'a' && character <= 'z') {
                uniqueChars.add(character);
            }
            if (uniqueChars.size() == 26) {
                return true;
            }
        }
        return uniqueChars.size() == 26;
    }

}
