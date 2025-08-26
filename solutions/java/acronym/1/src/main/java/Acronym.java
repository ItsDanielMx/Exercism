import java.util.*;

class Acronym {
    private String[] words;

    Acronym(String phrase) {
        this.words = phrase.split("[- ]");
    }

    String get() {
        StringBuilder str = new StringBuilder();
        for(String word : words){
            String newWord = normalizeWord(word);
            if (!newWord.isEmpty()) {
                str.append(newWord.charAt(0));
            }
        }
        return str.toString();
    }

    private String normalizeWord(String word) {
        return word.toUpperCase()
                .replaceAll("[^A-Z]", "")
                .trim();
    }
}
