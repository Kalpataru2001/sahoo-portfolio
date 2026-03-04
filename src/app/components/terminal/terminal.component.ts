import { AfterViewChecked, Component, ElementRef, signal, ViewChild } from '@angular/core';

interface TerminalLine {
  text: string;
  isCommand: boolean;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss'
})
export class TerminalComponent implements AfterViewChecked{
  @ViewChild('terminalBody') terminalBody!: ElementRef;
  @ViewChild('cmdInput') cmdInput!: ElementRef;

  history = signal<TerminalLine[]>([
    { text: 'Kalpataru-OS [Version 1.0.0]', isCommand: false },
    { text: 'Type "help" to see a list of available commands.', isCommand: false }
  ]);

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.terminalBody.nativeElement.scrollTop = this.terminalBody.nativeElement.scrollHeight;
    } catch(err) { }
  }


  focusInput() {
    this.cmdInput.nativeElement.focus();
  }


  processCommand(command: string) {
    const fullInput = command.trim();
    if (!fullInput) return;

    const parts = fullInput.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    this.history.update(h => [...h, { text: `guest@sahoo-os:~$ ${fullInput}`, isCommand: true }]);

    let response = '';
    
    switch (cmd) {
      case 'help':
        response = 'Available commands: whoami, skills, experience, projects, hobbies, contact, date, echo, clear, sudo, rm';
        break;
      case 'whoami':
        response = 'Kalpataru Sahoo - Fullstack Developer specializing in Angular, .NET, and Azure.';
        break;
      case 'skills':
        response = 'Angular 19, TypeScript, C#, ASP.NET Core, Azure, SQL Server, Core java,Git, Docker, CI/CD pipelines, and more.';
        break;
      case 'experience':
        response = 'Currently building enterprise applications at Kalpita Technologies. Previously achieved Gold Batch Recognition at Celebal Technology.';
        break;
      case 'projects':
        response = '1. Enterprise CRM Dashboard\n2. AI Document Parser\n3. Recruitment Portal\n4. Interactive Animated Websites\n5. Personal Portfolio Website';
        break;
      case 'contact':
        response = 'Email: kalpatarusahoo953@gmail.com | LinkedIn: linkedin.com/in/kalpatarusahoo | GitHub: github.com/Kalpataru2001';
        break;
      case 'hobbies':
        response = 'When I am not coding, I am usually hitting the open road on my bike, grinding through video games, or experimenting in the kitchen (my late-night Maggi with custom sauces and egg bhurji are legendary). I also never pass up a good web series that mixes crime, comedy, and romance.';
        break;

      // --- Utility Commands ---
      case 'date':
        response = new Date().toString();
        break;
      case 'echo':
        response = args ? args : 'echo: missing text argument';
        break;
      case 'clear':
        this.history.set([]); // Instantly clears the array
        return; // Exit early so we don't add an empty response

      // --- Easter Eggs & Jokes ---
      case 'sudo':
        response = 'Nice try. This incident will be reported to the system administrator.';
        break;
      case 'rm':
        if (args === '-rf /') {
          response = 'ERROR: Permission denied. Nice try deleting the server, though!';
        } else {
          response = 'rm: missing operand';
        }
        break;
      case 'matrix':
        response = 'Wake up, Neo... The Matrix has you... Follow the white rabbit.';
        break;

      // --- Fallback ---
      default:
        response = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }
    const responseLines = response.split('\n');
    responseLines.forEach(line => {
      this.history.update(h => [...h, { text: line, isCommand: false }]);
    });
  }
}
