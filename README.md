# Project goal (WHAT, brief outline)
The goal of the project is to develop a software application that would deliver
enhanced security for houses, shops, warehouses, etc. by building new functionality
and usability features on top of new and existing video surveillance, access control
and perimeter monitoring systems.

The software application is to be developed in several editions whose functionality
would gradually grow and change based on the performance of preceding editions
and users' requirements.


The software application would be delivered as both SaaS and as on-premises installations.
On-premises installations would be delivered as SDKs (software development kit)
to deliver minimum required performance as a standalone installation, and connections
to servers deployed in the cloud would be required for extra features.

Key features:
1. Face recognition from video captured by cameras.
The application has to have the features to process video from DVRs that record
video from CCTV cameras and from NVR that store video recorded by IP cameras.

2. Access rights management.
Several categories of people with varying access rights, from full access and selected admin
rights for some family members to limited access for temporary workers to access denial
and alert/alarm notifications upon detecting access attempts by unwanted persons.

3. Voice recognition (tentative, cost/benefit of this feature is subject to further research)

4. Integration with access control systems.
Bare minimum: importing, parsing, processing of CSV log files from access control systems
and matching the log data to recorded access occurrences according to video surveillance.

Desired features: two-way control of access control devices, i.e. locking and unlocking
electric door locks and electromagnetic locks (on top of the doors) using the application.
Would require some APIs with digital and legacy analog keypad and locking devices.
Recording of conversations with visitors is another desired feature.

5. Perimeter monitoring using special purpose sensors (tentative; this is probably
a nice feature to have but certainly not in the first 1-2 editions of the application)


# Project objectives (WHY)
The key assumption is that house owners as well as businesses that run shops, small and
mid-sized warehouses have a demand for cost efficient yet more function-rich security and
notification systems than traditional video surveillance and access control systems.

Traditional video surveillance systems that are not augmented by intelligent video analytics
are essentially a reactive tool that allows only to perform video review post factum.

Traditional access control systems manage access into based on RFID cards/tokens,
punch codes, electromagnetic locks and door locks, and typically provide access logs
as CSV files.


Unless those CSV log files are delivered in an informative format like a BI report
or notifications of unauthorized access attempts are sent real-time via sms or email,
are usually not readable for a user who is not tech-savvy enough to import,
process and make inference from those files.

The risks from which potential customers presumably seek enhanced protection:

1. Robbery.
The risk of criminals breaking into a house/shop/warehouse through doors that were closed but not locked.
To prevent this particular risk, the doors should be kep closed (this is easy, only takes a mechanical
devices to pull a door) and locked using an electromagnetic lock or an electric door lock.
Once a door is closed it should stay locked (for people trying to enter from outside) and
be easily unlockable either from inside by pulling on a door lever or unlockable via a punchcode,
face recognition and/or voice command.

2. Trespassing, intrusion.
Unwanted presence of people on one's land and/or premises.
Intrusion and trespassing must be detected and recorded.

3. Theft.
Internal theft (by employees in a shop or a warehouse, or by maids and other workers in a house)
is the primary concern for the time being.
Sensitive areas where valuables are stored must be under video surveillance;
face recognition is required to identify people who accessed such areas.

Advanced intelligent analytics like motion classification, theft prediction based on
human movement patterns, including detection of theft by visitors in shops is a separate area
of expertise that is outside the scope of this project.

# What this project is NOT:

1. Not about selling and installing video surveillance cameras and video management software.
There is an existing ecosystem of companies (in many if not most countries) that sell and install
IP cameras, 'previous generation' CCTV systems and accompanying software.

2. Not about building complete house/shop/warehouse security solutions that employ
video surveillance, access control systems, etc.
Building such solutions is by definition localized business activity that does not scale much.

3. Not about developing and selling video management software.
CCTV and IP camera manufacturers sell VMS, i.e. video management software along with the cameras,
digital and network video recorders. Among other things, VMS provides video recording, live view
and playback management, thus enabling users to view recorded videos on DVRs or via internet,
depending on camera types and surveillance system setup.

4. Not about advanced video analytics such as human behaviour recognition, e.g. pre-emptive
crime recognition, reacting and countering, or counting the number of visitors/customers in shops.
At least not for now. The above mentioned video analytics examples are valid real-life use cases
but are outside the scope of the project for the time being.


===========================================================  


Regarding the software stack for computer vision: 

OpenCV is the most obvious choice of the backbone library as it carries plenty of algorithms (2500+). 

Detectron 2 by Facebook is another open source project, and iit focuses specifically on object detection, segmentation and pose estimation.


Regarding the hardware:

This is a bit more complex. The application has to support:


1. "Legacy / previous generation" CCTV cameras and DVRs that record and playback captured videos.

Not sure whether video analytics can be performed on such videos real-time since those videos are not in a digital format,

but face recognition most likely would be possible real time.


Video analytics would have to be performed on a local computer/server in the background. 

This is a fairly frequent scenario because there are plenty of existing video surveillance installations that are CCTV.


2. IP cameras without embedded CPU/GPU, i.e. without built-in detection and recognition capabilities.

This requires centralized video analytics on a server/local computer using a on-premises installation of the application or 

installation of the application's core in the form of a SDK. 


This is either the first or the second most frequent scenario, and it requires a fairly powerful GPU powered computer.


3. Ideally, IP cameras with built-in detection and recognition capabilities that also generate metadata for the videos recorded.

The "best" scenario that will probably occur quite rarely in real life though because such cameras are not as widespread and are more expensive.

But I haven't done research on the cameras yet. . 


Nvidia Jetson Nano seems to be the #1 option for a local small form factor DL-oriented computer (to be installed on clients' premises).

It costs $150-170 and is more powerful than other similar devices by Intel and Google.

And of course Nvidia 2080Ti GPUs will be required for training the models on desktops/servers during the development. 

But overall nothing too fancy or exotic or too expensive as far as computers are concerned.
