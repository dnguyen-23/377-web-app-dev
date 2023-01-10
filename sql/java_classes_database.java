public class Album
{
    String name;
    ArrayList<Song> songs;
    String artist;
    int year;
    String pathToIMG;
    public Album (String name, ArrayList<Song> songs, String artist, int year, String pathToIMG)
    {
        this.name = name;
        this.year = year;
        this.artist = artist;
        this.year = year;
        this.pathToIMG = pathToIMG;
        if (songs == null) 
        {
            this.songs = new ArrayList<Song>();
        }
        else if (songs != null)
        {
            this.songs = songs;
        }
    }

    public void addSong(Song song)
    {
        songs.add(song);
    }
}

public class Song
{
    String title;
    int duration;
    Album album;
    public Song (String title, int duration, Album album)
    {
        this.title = title;
        this.duration = duration;
        this.album = album;
    }

    public String toString()
    {
        return "" + this.title + " " + this.artist + " " + this.duration;
    }

}
