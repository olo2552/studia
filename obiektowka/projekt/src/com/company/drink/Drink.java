package com.company.drink;

public class Drink {
    protected int id;
    protected String name;
    protected int volume;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Drink(int id, String name, int volume) {
        this.id = id;
        this.name = name;
        this.volume = volume;
    }
}
