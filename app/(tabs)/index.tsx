import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, FontSize } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Mi App</Text>
        <Text style={styles.sub}>Tecnicatura UNP 2026</Text>
      </View>

      <View style={styles.bienvenida}>
        <Text style={styles.msg}>
          Proyecto grupal inicializado correctamente.
        </Text>
      </View>

      <View style={styles.features}>
        <Text style={styles.featureLabel}>Lo que vas a construir:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.md,
  },
  header: {
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  titulo: {
    fontSize: FontSize.xxxl,
    fontWeight: 'bold',
    color: Colors.text,
  },
  sub: {
    fontSize: FontSize.md,
    color: Colors.textMuted,
    marginTop: Spacing.xs,
  },
  bienvenida: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.md,
  },
  msg: {
    fontSize: FontSize.lg,
    color: Colors.text,
    textAlign: 'center',
  },
  features: {
    paddingVertical: Spacing.lg,
  },
  featureLabel: {
    fontSize: FontSize.md,
    fontWeight: 'bold',
    color: Colors.textMuted,
    marginBottom: Spacing.sm,
  },
} );