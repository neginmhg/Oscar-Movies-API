# Oscars Movies API 

A basic API for Oscars Movies from 1921 to 2019, in JSON format. Home page and search engine for displaying information in a UI about each movie.

### Installation

The web app runs on a Flask container, which handles all of the endpoints and routing between each page. Flask is a python framework, so the first thing that would need to be done is to download and install Python3, and then the python package manager pip. Pip will be used to install the Flask framework.

##### Windows:

- Install python at https://www.python.org/downloads/windows/

  Download and install the latest release of python 3

  <img src="/home/tk/.config/Typora/typora-user-images/image-20200513210151048.png" alt="image-20200513210151048" style="zoom:33%;" /> 

- Download and run the **get-pip.py** script found at https://bootstrap.pypa.io/get-pip.py

  To run the script, use your command prompt to navigate to the directory the file is located and run

  ```powershell
  python get-pip.py
  ```

  Verify it was installed correctly with

  ```powershell
  pip -V
  ```

  You should see something similar to

  ```
  pip 18.0 from c:\users\administrator\appdata\local\programs\python\python37\lib\site-packages\pip (python 3.7)
  ```

  Once complete, install Flask by running

  ```
  pip install Flask
  ```

  

  ##### Mac

  - There are multiple ways to install python, the best way will install python3 and pip together, as the most common method using ```easy_install``` is deprecated.

    We will use the package manager Homebrew instead.

    First we must use curl to install homebrew, open the shell and run

    ```shell
    $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

    Next we need to update the ```PATH```  by running this

    ```shell
    export PATH="/usr/local/opt/python/libexec/bin:$PATH"
    ```

    If you have OS X 10.12 (Sierra) or older use this line instead

    ```shell
    export PATH=/usr/local/bin:/usr/local/sbin:$PATH
    ```

    Finally, we can install python with the command

    ```shell
    $ brew install python
    ```

    Verify pip3 is installed

    ```shell
    $ python --version
    Python 3.7.1 # Success!
    ```

    Once complete, install Flask by running

    ```
    pip install Flask
    ```

##### Linux

​			  For the sake of simplicity, I will only cover Debian/Ubuntu distributions

​			  However this is by far the easiest, fastest (and my personal favorite as I use Ubuntu 20) way

​				

```shell
$ sudo apt install python3-venv python3-pip
```



### Usage

Run the flask container by navigating to the project directory and running 

```shell
python oscars.py
```

The server will be running on your machine, configured to run at port 8083, which can be changed in the oscars.py file on line 82. Once server is running, the website will be active. If you are not hosting on a server with a domain name you can access the website via your own domain name at https://localhost:8083/



### Testing

All the data can be accessed at /api/movies and api/category_search. For the general collection resource, use /api/movies.

```
curl -i /api/movies
```

For the singleton endpoint use this command, along with an IMDB ID

```
curl -i /api/movies/[IMDB ID]
```

To search by category, use

```
curl -i /api/category_search/[category]
```

where [category] is a string
