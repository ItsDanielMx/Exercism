class MicroBlog {
    public String truncate(String input) {
        int length = input.codePointCount(0, input.length());
        int count = input.offsetByCodePoints(0, length > 5 ? 5 : length);
        return input.substring(0, count);
    }
}