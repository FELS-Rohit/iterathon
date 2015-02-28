package de.iteratec.raspberrylight.service;

import de.iteratec.raspberrylight.model.Alarm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

@Controller
@RequestMapping(value = "/alarm", consumes = "application/json", produces = "application/json")
public class AlarmClockController {

    private Map<String, Alarm> alarms = new HashMap<>();

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody Collection<Alarm> getAlarms() {
        return alarms.values();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void setAlarm(Alarm newAlarm) {
        alarms.put(newAlarm.getName(), newAlarm);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void updateAlarm(Alarm alarm)  {
        if (alarms.get(alarm.getName()) != null) {
            alarms.put(alarm.getName(), alarm);
        } else {
            // What to do?
        }
    }

}
