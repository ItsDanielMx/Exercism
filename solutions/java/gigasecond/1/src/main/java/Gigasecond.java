import java.time.LocalDate;
import java.time.LocalDateTime;

public class Gigasecond {
    private LocalDateTime date;
    private int GIGASECOND = 1000000000;
    public Gigasecond(LocalDate moment) {
        this.date = moment.atStartOfDay().plusSeconds(GIGASECOND);
    }

    public Gigasecond(LocalDateTime moment) {
        this.date = moment.plusSeconds(GIGASECOND);
    }

    public LocalDateTime getDateTime() {
        return date;
    }
}
