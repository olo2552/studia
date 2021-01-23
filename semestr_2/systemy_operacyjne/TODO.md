Maszyny wirtualne:
    - [x] WS2019
        - [x] root credentials:
            Administrator
            Szajba1
            ---
            toor
            Szajba2
        - [x] hostname: WIN-JL0A7ASC981
        - [x] Static IP:
            10.0.0.5
    - [x] WS2016
        - [x] root credentials:
            Administrator
            Szajba1
        - [x] Static IP:
            10.0.0.6
    - [x] W10
    - [ ] Ubuntu
        - [x] root credentials:
            root
            Szajba1
	LAN Network:
		- Interface name: ens38
        	- [x] Static IP
            		10.0.0.7
	WAN Network:
		- Interface name: ens33
	- [x] firewall
		all ports open
        - [x] hostname: ubuntu-sop
    - [x] FreeBSD
        - [x] user1
                Szajba1

WS2019:
    - [x] Active Directory
        - [x] Directory Services Resore Mode Password
            Szajba1
        - [x] dowolna organizacja
        # Wszystkie hasła użytkowników to `Szajba1`
        # Wszystkie loginy użytkowników to iniciały + index grupy 
        - [x] 5 groups
            - [x] Uczniowie
                GPOs:
                    - [x] Restrict access to control panel
                Users:
                    - [x] Janek Kowalczyk
                    - [x] Basia Kowalczyk
                    - [x] Kasia Kowalczyk
                    - [x] Martyna Kowalczyk
                    - [x] Bartek Kowalczyk
            - [x] Nauczyciele
                - [x] GPOS:
                    - [x] Prohibit Access to Windows Connect Now
                - [x] Users:
                    - [x] Adam Adamczyk
                    - [x] Katarzyna Adamczyk
                    - [x] Maria Adamczyk
                    - [x] Piotr Adamczyk
                    - [x] Jan Adamczyk
            - [x] Sekretariat
                - [x] Marian Wojtyla
                - [x] Ela Wojtyla
                - [x] Jan Wojtyla
                - [x] Wojtek Wojtyla
                - [x] Teresa Wojtyla
            - [x] Administracja
                - [x] John Doe
                - [x] Helen Doe
            - [x] Kontraktorzy
                - [x] GPOS:
                    - Prohibit Users from manually Redirecting Profile Folders
                Users:
                    - [x] Grazyna Zarko
                    - [x] Damian Zarko
    - [x] GPOs
    - [ ] DNS
        - [x] Forward Lookup Zone => szkola.local
        - [x] Reverse Lookup Zone => 10.0.0
        - [x] metrics => 10.0.0.7
    - [x] DHCP
        - [x] 10.0.0.7 - 10.0.0.15
        - [x] subnet 255.255.255.0
        - [x] x.x.x.5 for WS2019
        - [x] x.x.x.6 for WS2016
    - [x] IIS
    - [ ] Prometheus node exporter
WIN10:
    - [ ] root passwd
        User1
        Szajba1
    - [x] Pytania pomocnicze
        - [x] Zwierzę
            abc
        - [x] Miasto
            abc1
        - [x] Kuzyn
            abc2

Metrics and infrastructure monitoring:
    System used: Prometheus, as Production-based logging and infrastructure monitoring
    Running from Prometheus server from Docker, to imitate multi-master environment on UBUNTU server
    DockProm can be found on `/docprom` folder
    - [x] Grafana Credencials:
        admin
        Szajba1
