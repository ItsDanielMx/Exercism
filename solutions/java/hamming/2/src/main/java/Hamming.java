public class Hamming {
    String leftStrand;
    String rightStrand;
    int hammingDistance = 0;

    public Hamming(String leftStrand, String rightStrand) {
        if (leftStrand.length() != rightStrand.length()) throw new IllegalArgumentException("strands must be of equal length");
        this.leftStrand = leftStrand;
        this.rightStrand = rightStrand;
        for (int i = 0; i < leftStrand.length(); i++) {
            if (leftStrand.charAt(i) != rightStrand.charAt(i)) hammingDistance++;
        }
    }

    public int getHammingDistance() {
        return hammingDistance;
    }
}

